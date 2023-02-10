import { ITest } from "./states/test";
import { TransactionState } from "./states/transaction";

export interface IRootState {
    test: ITest,
    transaction: TransactionState
}