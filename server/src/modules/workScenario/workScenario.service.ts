import { workScenarioMessages } from "./workScenario.messages.js";
import type {
  WorkScenarioPayload,
  WorkScenarioResponse,
} from "./workScenario.types.js";

export class WorkScenarioService {
  generateScenario(payload: WorkScenarioPayload): WorkScenarioResponse {
    return {
      text: workScenarioMessages[payload.taskType][payload.projectContext][
        payload.tone
      ],
    };
  }
}

export const workScenarioService = new WorkScenarioService();
