import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: ["http://localhost:3000"],
  emailAndPassword: {
    enabled: true,
    autoSignup: false,
    requireEmailVerification: true,
    onExistingUserSignUp: async ({ user }, request) => {
      // void sendEmail({
      //   to: user.email,
      //   subject: "Sign-up attempt with your email",
      //   text: "Someone tried to create an account using your email address. If this was you, try signing in instead. If not, you can safely ignore this email.",
      // });
      console.log("user exist");
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      // void sendEmail({
      //   to: user.email,
      //   subject: "Verify your email address",
      //   text: `Click the link to verify your email: ${url}`,
      // });
      console.log("Email verification");
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        default: "Customer",
      },
    },
  },
});
