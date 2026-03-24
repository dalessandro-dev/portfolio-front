import axios from "axios";
import type { Project, FiltersProjects } from "../lib/projects";
import type { Stack, FiltersStacks } from "../lib/techStack";
import { useState } from "react";

export function useApi() {
  const url = import.meta.env.VITE_API_URL;

  const [stacks, setStacks] = useState<Stack[] | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<{
    status: number;
    message: string;
  } | null>(null);

  const fetchProjects = async (
    { query, stacksId, page = 1, perPage = 5 }: FiltersProjects = {},
    loadMore = false,
  ) => {
    setLoading(true);

    let uri = `${url}/projects?page=${page}&perPage=${perPage}`;

    if (query) {
      uri += `&query=${query}`;
    }

    if (stacksId) {
      stacksId.forEach((stackId) => {
        uri += `&stacksId=${stackId}`;
      });
    }

    let result;

    try {
      result = await axios.get(uri);
    } catch (err: any) {
      const res = err.response;

      if (!res) {
        setError({ status: 0, message: "Servidor offline ou erro de rede." });
      } else if (res.status === 500) {
        setError({ status: 500, message: "Ops! Um erro interno ocorreu." });
      }

      return;
    }

    if (loadMore) {
      setProjects((prev) => [...(prev || []), ...(result.data.data || [])]);
    } else {
      setProjects(result.data.data);
    }

    setHasMore(result.data.meta.hasMore);
    setTotal(result.data.meta.total);
    setLoading(false);
    console.log(result.data.data);
  };

  const fetchStacks = async ({
    perPage = 50,
    page = 1,
  }: FiltersStacks = {}) => {
    setLoading(true);

    const uri = `${url}/stacks?page=${page}&perPage=${perPage}`;
    let result;

    try {
      result = await axios.get(uri);
    } catch (err: any) {
      const res = err.response;

      if (!res) {
        setError({ status: 0, message: "Servidor offline ou erro de rede." });
      } else if (res.status === 500) {
        setError({ status: 500, message: "Ops! Um erro interno ocorreu." });
      }

      return;
    }

    setStacks(result.data.data);
    setLoading(false);
  };

  return {
    fetchProjects,
    fetchStacks,
    projects,
    stacks,
    isLoading,
    error,
    hasMore,
    total,
  };
}
