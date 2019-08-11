import { QueryFilters } from 'app/shared/utils/filters';
import { dateSeparator } from 'app/shared/utils/constants';
import { toShortDate } from 'app/shared/utils/helpers';
import { TokenOperation } from './token.model';

export const tokenQueryFilters: QueryFilters<TokenOperation> = {
  operation: (token: TokenOperation, operation: string): boolean =>
    token.operation === +operation
  ,
  by: (token: TokenOperation, userId: string): boolean =>
    token.creator.id === userId
  ,
  dateRange: (token: TokenOperation, dateRange: string): boolean => {
    const [from, to] = dateRange.split(dateSeparator);
    const createdAt = toShortDate(token.createdAt);

    return from <= createdAt && createdAt <= to;
  }
};
