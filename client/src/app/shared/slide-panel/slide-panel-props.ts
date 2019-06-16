export interface SlidePanelProps {
  onExit: () => void;
  render: ((close: () => void) => React.ReactNode);
}