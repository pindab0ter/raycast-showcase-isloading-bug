import { List } from "@raycast/api";
import { usePromise } from "@raycast/utils";

export default function Command() {
  const {
    isLoading
  } = usePromise(async () => {
    return "test"
  }, [], {
    execute: false,
  });

  return (
    <List isLoading={isLoading}>
    </List>
  );
}
