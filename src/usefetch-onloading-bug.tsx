import { List } from "@raycast/api";
import { useFetch } from "@raycast/utils";

export default function Command() {
  const {
    isLoading
  } = useFetch("https://example.com", {
    execute: false,
  });

  return (
    <List isLoading={isLoading}>
    </List>
  );
}
