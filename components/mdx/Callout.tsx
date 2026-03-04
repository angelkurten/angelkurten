import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "error";
  children: React.ReactNode;
}

const styles = {
  info: "border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-200",
  warning: "border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
  error: "border-red-500 bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-200",
};

const icons = {
  info: "💡",
  warning: "⚠️",
  error: "🚨",
};

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div className={cn("my-6 rounded-lg border-l-4 p-4", styles[type])}>
      <div className="flex gap-2">
        <span className="text-lg">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
