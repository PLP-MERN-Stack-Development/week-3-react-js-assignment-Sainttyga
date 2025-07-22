import type React from "react";
import { cn } from "../../utils/cn";

// CardProps interface to define the structure of the card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Card component to render a styled card container
const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

// CardHeaderProps interface to define the structure of the header component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// CardHeader component to render the header section of the card
const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
    {children}
  </div>
);

// CardTitleProps interface to define the structure of the title component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

// CardTitle component to render the title of the card
const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

// CardDescriptionProps interface to define the structure of the description component
interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

// CardDescription component to render a description below the title
const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
);

// CardContentProps interface to define the structure of the content component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// CardContent component to render the main content of the card
const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

// CardFooterProps interface to define the structure of the footer component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// CardFooter component to render content at the bottom of the card
const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

// Export all components for use in other parts of the application
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
