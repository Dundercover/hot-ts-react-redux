import { AppState } from '../../store/index'

export const selectCount = (state: AppState) => state.counter.count
export const selectIsLoadingCount = (state: AppState) => state.counter.isLoading
