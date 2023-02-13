import { ITest } from "./states/test";
import { TransactionState } from "./states/transaction";
import { BlockState } from "./states/block";

export interface IRootState {
    test: ITest,
    transaction: TransactionState,
    block: BlockState
}