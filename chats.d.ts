export declare module "./chats.js" {
	export type Chat = {
		time: string,
		message: string
	};

	export function log(chat: Chat[]): void;

	export const chats: Chat[];
}
