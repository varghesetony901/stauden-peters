/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/services",
  "/blogs",
  "/contact",
  "/gallery",
  "/about",
  "/data-protection",
];

export const protectedRoutes = [
  "/dashboard",
  "/dashboard/student-services",
  "/dashboard/company-services",
  "/dashboard/enquiry-mail",
  "/dashboard/photo-tags",
  "/dashboard/photos",
  "/dashboard/blog-tags",
  "/dashboard/blogs",
  "/dashboard/backup",
];


/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";