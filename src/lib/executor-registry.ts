import { httpRequestExecutor } from "@/features/executions/components/htpp-request/executor";
import { NodeExecutor } from "@/features/executions/types";
import { manualTriggerExecutor } from "@/features/triggers/manual-trigger/executor";
import { NodeType } from "@/generated/prisma/enums";

export const executorRegistry: Record<NodeType, NodeExecutor> = {
  [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
  [NodeType.INITIAL]: manualTriggerExecutor,
  [NodeType.HTTP_REQUEST]: httpRequestExecutor,
};

export const getExecuter = (type: NodeType): NodeExecutor => {
  const executor = executorRegistry[type];
  if (!executor) {
    throw new Error(`No executor found for node type: ${type}`);
  }
  return executor;
};
