import { forwardRef } from "react";
import { cn } from "../utils/cn";
import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
        ref={ref}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
