import { AppState } from '../../utils/root-reducer'

export const selectCount = (state: AppState) => state.counter.count
export const selectIsLoadingCount = (state: AppState) => state.counter.isLoading
