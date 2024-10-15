export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:ZBWQGm5r0CzO@ep-tiny-wind-a5wknzry.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:ZBWQGm5r0CzO@ep-tiny-wind-a5wknzry.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
