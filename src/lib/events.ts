import type { ComaEvent } from "../types/event";
import { events } from "../data/events";

export function getEventById(id: string): ComaEvent | undefined {
  return events.find((e) => e.id === id);
}
