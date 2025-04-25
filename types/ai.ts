import OpenAI from "openai";
import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";

export const coreMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string(),
});
export type CoreMessage = z.infer<typeof coreMessageSchema>;

export const intentionTypeSchema = z.enum([
  "hostile_message",
  "random",
  "question",
]);
export type IntentionType = z.infer<typeof intentionTypeSchema>;

export const intentionSchema = z.object({
  type: intentionTypeSchema,
});
export type Intention = z.infer<typeof intentionSchema>;

export interface AIProviders {
  openai: OpenAI;
  anthropic: Anthropic;
  fireworks: OpenAI; // Fireworks doesn't have an SDK, they modify OpenAI's
  llama: OpenAI; // Llama can be accessed via OpenAI compatible API
}

export const providerNameSchema = z.enum(["openai", "anthropic", "fireworks", "llama"]);
export type ProviderName = z.infer<typeof providerNameSchema>;
