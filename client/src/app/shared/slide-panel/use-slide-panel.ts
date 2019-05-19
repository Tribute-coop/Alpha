import { RouteComponentProps } from 'react-router';
import { useEffect, useCallback, useState } from 'react';

interface SlidePanelState {
  handleClose: () => void;
  opened: boolean;
}

export function useSlidePanel(props: RouteComponentProps, route: string): SlidePanelState {
  const { history, location: { pathname, search } } = props;
  const [ opened, setOpened ] = useState(false);

  const handleClose = useCallback((): void => {
    history.push(pathname.replace(route, '') + search);
  }, [pathname, search, history, route]);

  useEffect((): void => {
    setOpened(pathname.includes(route));
  }, [pathname, route]);

  return { handleClose, opened };
}
