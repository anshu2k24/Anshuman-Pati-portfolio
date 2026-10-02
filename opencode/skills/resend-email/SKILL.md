---
name: resend-email
description: Clean Next.js App Router email integration using Resend HTTP API
---
# Rules for Modern Email Handling
- Use the `resend` SDK or standard HTTPS `fetch` to `https://api.resend.com/emails`.
- Never use `nodemailer` or open raw SMTP sockets in Next.js App Router routes.
- Format all new modules as ESM (`export`, `import`); do not introduce CommonJS (`require`, `module.exports`).
- Return clean HTTP responses (`200 OK`, `400 Bad Request`, `500 Internal Error`) with `{ success: true/false, message }`.
- Validate required fields (`name`, `email`, `message`) before calling external APIs.
- Keep business logic in small helper functions; do not clutter `route.js`.