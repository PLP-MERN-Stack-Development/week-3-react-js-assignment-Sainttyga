// Represents a post in the JSONPlaceholder API
export interface Post { 
  userId: number; 
  id: number;
  title: string;
  body: string;
}

// Represents a user in the JSONPlaceholder API
export interface User { 
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Base URL for the JSONPlaceholder API
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetches a list of posts with pagination
export const fetchPosts = async (page = 1, limit = 10): Promise<Post[]> => {
  const response = await fetch(
    `${BASE_URL}/posts?_page=${page}&_limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

// Fetches a list of users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

// Fetches a single post by its ID
export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
};

// Searches posts by title or body content
export const searchPosts = async (query: string): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] = await response.json();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase()),
  );
};
