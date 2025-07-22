import type React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import Button from "../components/Button";

// Home component to render the landing page
const Home: React.FC = () => {
  const features = [
    {
      title: "Task Management",
      description:
        "Create, organize, and track your tasks with an intuitive interface.",
      icon: "✅",
      link: "/tasks",
    },
    {
      title: "API Integration",
      description:
        "Explore data from external APIs with search and pagination features.",
      icon: "🔌",
      link: "/api",
    },
    {
      title: "Dark Mode",
      description:
        "Switch between light and dark themes for comfortable viewing.",
      icon: "🌙",
      link: "#",
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices.",
      icon: "📱",
      link: "#",
    },
  ];

  // Render the Home component with the defined content
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TaskApp
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern task management application built with React, TypeScript,
            and Tailwind CSS. Manage your tasks efficiently with our clean and
            intuitive interface.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/api">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore API Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes TaskApp the perfect solution for your
            productivity needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">
              Responsive Design
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">⚡</div>
            <div className="text-sm text-muted-foreground">Lightning Fast</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">🎨</div>
            <div className="text-sm text-muted-foreground">Modern UI</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Join thousands of users who are already boosting their productivity
          with TaskApp.
        </p>
        <Link to="/tasks">
          <Button size="lg">Start Managing Tasks</Button>
        </Link>
      </section>
    </div>
  );
};

// Export the Home component for use in the application
export default Home;
