import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hola, soy ${AI_NAME}, el asistente de inteligencia artificial de ${OWNER_NAME}. Estoy aquí para ayudar a generar contenido de texto para publicar en las redes sociales para promover los servicios de American Tax Professional.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Lo siento, tengo problemas para generar una respuesta. Inténtalo de nuevo más tarde.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
