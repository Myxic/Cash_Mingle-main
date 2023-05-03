import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ViewAccountBalanceComponent } from './view-account-balance/view-account-balance.component';



@NgModule({
  declarations: [
    TransactionsComponent,
    TransferComponent,
    WithdrawalComponent,
    DepositComponent,
    TransactionHistoryComponent,
    ViewAccountBalanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
