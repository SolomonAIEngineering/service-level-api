package financial_servicev1

import (
	"github.com/uptrace/go-clickhouse/ch"
)

/*
* In this view, we're counting the number of transactions and summing the amount for each category,
* city, and payment channel for each month. To get the aggregates for the past week, two weeks, month,
* six months, one year, or two years, you would filter this table in your queries. However, remember
* that weeks do not align perfectly with months, so the results may not be exactly what you expect.
 */
type TransactionAggregatesByMonthInternal struct {
	ch.CHModel                     `ch:"TransactionAggregatesByMonth,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	LocationCity                   string  `ch:"LocationCity,type:String"`
	PaymentChannel                 string  `ch:"PaymentChannel,type:String"`
	MerchantName                   string  `ch:"MerchantName,type:String"`
	TransactionCount               uint64  `ch:"TransactionCount,type:UInt64"`
	TotalAmount                    float64 `ch:"TotalAmount,type:Float64"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *TransactionAggregatesByMonthInternal) ConvertToORM() *TransactionAggregatesByMonthORM {
	return &TransactionAggregatesByMonthORM{
		LocationCity:                   source.LocationCity,
		MerchantName:                   source.MerchantName,
		Month:                          source.Month,
		PaymentChannel:                 source.PaymentChannel,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalAmount:                    source.TotalAmount,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *TransactionAggregatesByMonthORM) ConvertToInternal() *TransactionAggregatesByMonthInternal {
	return &TransactionAggregatesByMonthInternal{
		LocationCity:                   source.LocationCity,
		MerchantName:                   source.MerchantName,
		Month:                          source.Month,
		PaymentChannel:                 source.PaymentChannel,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalAmount:                    source.TotalAmount,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *TransactionAggregatesByMonthInternal) ConvertToProto() *TransactionAggregatesByMonth {
	return &TransactionAggregatesByMonth{
		LocationCity:                   source.LocationCity,
		MerchantName:                   source.MerchantName,
		Month:                          source.Month,
		PaymentChannel:                 source.PaymentChannel,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalAmount:                    source.TotalAmount,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type CategoryMonthlyExpenditureInternal struct {
	ch.CHModel                     `ch:"CategoryMonthlyExpenditure,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TotalSpending                  float64 `ch:"TotalSpending,type:Float64"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *CategoryMonthlyExpenditureInternal) ConvertToORM() *CategoryMonthlyExpenditureORM {
	return &CategoryMonthlyExpenditureORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalSpending:                  source.TotalSpending,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyExpenditureORM) ConvertToInternal() *CategoryMonthlyExpenditureInternal {
	return &CategoryMonthlyExpenditureInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalSpending:                  source.TotalSpending,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyExpenditureInternal) ConvertToProto() *CategoryMonthlyExpenditure {
	return &CategoryMonthlyExpenditure{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalSpending:                  source.TotalSpending,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type CategoryMonthlyIncomeInternal struct {
	ch.CHModel                     `ch:"CategoryMonthlyIncome,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TotalIncome                    float64 `ch:"TotalIncome,type:Float64"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *CategoryMonthlyIncomeInternal) ConvertToORM() *CategoryMonthlyIncomeORM {
	return &CategoryMonthlyIncomeORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    source.TotalIncome,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyIncomeORM) ConvertToInternal() *CategoryMonthlyIncomeInternal {
	return &CategoryMonthlyIncomeInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    source.TotalIncome,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyIncomeInternal) ConvertToProto() *CategoryMonthlyIncome {
	return &CategoryMonthlyIncome{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    source.TotalIncome,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type CategoryMonthlyTransactionCountInternal struct {
	ch.CHModel                     `ch:"CategoryMonthlyTransactionCount,partition:toYYYYMM(time)"`
	Month                          uint32 `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TransactionCount               uint32 `ch:"TransactionCount,type:UInt32"`
	UserId                         string `ch:"UserId,type:String"`
	ProfileType                    string `ch:"ProfileType"`
}

func (source *CategoryMonthlyTransactionCountInternal) ConvertToORM() *CategoryMonthlyTransactionCountORM {
	return &CategoryMonthlyTransactionCountORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyTransactionCountORM) ConvertToInternal() *CategoryMonthlyTransactionCountInternal {
	return &CategoryMonthlyTransactionCountInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMonthlyTransactionCountInternal) ConvertToProto() *CategoryMonthlyTransactionCount {
	return &CategoryMonthlyTransactionCount{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type DebtToIncomeRatioInternal struct {
	ch.CHModel  `ch:"DebtToIncomeRatio,partition:toYYYYMM(time)"`
	Month       uint32  `ch:"Month,type:UInt32"`
	Ratio       float64 `ch:"Ratio,type:Float64"`
	UserId      string  `ch:"UserId,type:String"`
	ProfileType string  `ch:"ProfileType"`
}

func (source *DebtToIncomeRatioInternal) ConvertToORM() *DebtToIncomeRatioORM {
	return &DebtToIncomeRatioORM{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *DebtToIncomeRatioORM) ConvertToInternal() *DebtToIncomeRatioInternal {
	return &DebtToIncomeRatioInternal{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *DebtToIncomeRatioInternal) ConvertToProto() *DebtToIncomeRatio {
	return &DebtToIncomeRatio{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: transformFinancialProfileType(source.ProfileType),
	}
}

/*
* This view will aggregate all expenses (transactions where the Amount is less than zero) by category and month.
* If your definition of "expense metrics" is different, you might need to adjust the query accordingly.*
 */
type ExpenseMetricsInternal struct {
	ch.CHModel                     `ch:"ExpenseMetrics,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TransactionCount               uint64  `ch:"TransactionCount,type:UInt64"`
	TotalExpenses                  float64 `ch:"TotalExpenses,type:Float64"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *ExpenseMetricsInternal) ConvertToORM() *ExpenseMetricsORM {
	return &ExpenseMetricsORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalExpenses:                  source.TotalExpenses,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *ExpenseMetricsORM) ConvertToInternal() *ExpenseMetricsInternal {
	return &ExpenseMetricsInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalExpenses:                  source.TotalExpenses,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *ExpenseMetricsInternal) ConvertToProto() *ExpenseMetrics {
	return &ExpenseMetrics{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalExpenses:                  source.TotalExpenses,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type FinancialProfileInternal struct {
	ch.CHModel            `ch:"FinancialProfile,partition:toYYYYMM(time)"`
	Month                 uint32  `ch:"Month,type:UInt32"`
	TotalIncome           float64 `ch:"TotalIncome,type:Float64"`
	TotalExpenses         float64 `ch:"TotalExpenses,type:Float64"`
	NumberOfTransactions  uint64  `ch:"NumberOfTransactions,type:UInt64"`
	MostExpensiveCategory string  `ch:"MostExpensiveCategory,type:String"`
	UserId                string  `ch:"UserId,type:String"`
	ProfileType           string  `ch:"ProfileType"`
}

func (source *FinancialProfileInternal) ConvertToORM() *FinancialProfileORM {
	return &FinancialProfileORM{
		Month:                 source.Month,
		MostExpensiveCategory: source.MostExpensiveCategory,
		NumberOfTransactions:  source.NumberOfTransactions,
		TotalExpenses:         source.TotalExpenses,
		TotalIncome:           source.TotalIncome,
		UserId:                source.UserId,
		ProfileType:           source.ProfileType,
	}
}

func (source *FinancialProfileORM) ConvertToInternal() *FinancialProfileInternal {
	return &FinancialProfileInternal{
		Month:                 source.Month,
		MostExpensiveCategory: source.MostExpensiveCategory,
		NumberOfTransactions:  source.NumberOfTransactions,
		TotalExpenses:         source.TotalExpenses,
		TotalIncome:           source.TotalIncome,
		UserId:                source.UserId,
		ProfileType:           source.ProfileType,
	}
}

func (source *FinancialProfileInternal) ConvertToProto() *FinancialProfile {
	return &FinancialProfile{
		Month:                 source.Month,
		MostExpensiveCategory: source.MostExpensiveCategory,
		NumberOfTransactions:  source.NumberOfTransactions,
		TotalExpenses:         source.TotalExpenses,
		TotalIncome:           source.TotalIncome,
		UserId:                source.UserId,
		ProfileType:           transformFinancialProfileType(source.ProfileType),
	}
}

type IncomeExpenseRatioInternal struct {
	ch.CHModel  `ch:"IncomeExpenseRatio,partition:toYYYYMM(time)"`
	Month       uint32  `ch:"Month,type:UInt32"`
	Ratio       float64 `ch:"Ratio,type:Float64"`
	UserId      string  `ch:"UserId,type:String"`
	ProfileType string  `ch:"ProfileType"`
}

func (source *IncomeExpenseRatioInternal) ConvertToORM() *IncomeExpenseRatioORM {
	return &IncomeExpenseRatioORM{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *IncomeExpenseRatioORM) ConvertToInternal() *IncomeExpenseRatioInternal {
	return &IncomeExpenseRatioInternal{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *IncomeExpenseRatioInternal) ConvertToProto() *IncomeExpenseRatio {
	return &IncomeExpenseRatio{
		Month:       source.Month,
		Ratio:       source.Ratio,
		UserId:      source.UserId,
		ProfileType: transformFinancialProfileType(source.ProfileType),
	}
}

type IncomeMetricsInternal struct {
	ch.CHModel                     `ch:"IncomeMetrics,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TransactionCount               uint64  `ch:"TransactionCount,type:UInt64"`
	TotalIncome                    float32 `ch:"TotalIncome,type:Float32"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *IncomeMetricsInternal) ConvertToORM() *IncomeMetricsORM {
	return &IncomeMetricsORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    float64(source.TotalIncome),
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *IncomeMetricsORM) ConvertToInternal() *IncomeMetricsInternal {
	return &IncomeMetricsInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    float32(source.TotalIncome),
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *IncomeMetricsInternal) ConvertToProto() *IncomeMetrics {
	return &IncomeMetrics{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		TotalIncome:                    float64(source.TotalIncome),
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type MerchantMonthlyExpenditureInternal struct {
	ch.CHModel    `ch:"MerchantMonthlyExpenditure,partition:toYYYYMM(time)"`
	Month         uint32  `ch:"Month,type:UInt32"`
	MerchantName  string  `ch:"MerchantName,type:String"`
	TotalSpending float64 `ch:"TotalSpending,type:Float64"`
	UserId        string  `ch:"UserId,type:String"`
	ProfileType   string  `ch:"ProfileType"`
}

func (source *MerchantMonthlyExpenditureInternal) ConvertToORM() *MerchantMonthlyExpenditureORM {
	return &MerchantMonthlyExpenditureORM{
		Month:         source.Month,
		MerchantName:  source.MerchantName,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MerchantMonthlyExpenditureORM) ConvertToInternal() *MerchantMonthlyExpenditureInternal {
	return &MerchantMonthlyExpenditureInternal{
		Month:         source.Month,
		MerchantName:  source.MerchantName,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MerchantMonthlyExpenditureInternal) ConvertToProto() *MerchantMonthlyExpenditure {
	return &MerchantMonthlyExpenditure{
		Month:         source.Month,
		MerchantName:  source.MerchantName,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlyBalanceInternal struct {
	ch.CHModel  `ch:"MonthlyBalance,partition:toYYYYMM(time)"`
	Month       uint32  `ch:"Month,type:UInt32"`
	NetBalance  float64 `ch:"NetBalance,type:Float64"`
	UserId      string  `ch:"UserId,type:String"`
	ProfileType string  `ch:"ProfileType"`
}

func (source *MonthlyBalanceInternal) ConvertToORM() *MonthlyBalanceORM {
	return &MonthlyBalanceORM{
		Month:       source.Month,
		NetBalance:  source.NetBalance,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlyBalanceORM) ConvertToInternal() *MonthlyBalanceInternal {
	return &MonthlyBalanceInternal{
		Month:       source.Month,
		NetBalance:  source.NetBalance,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlyBalanceInternal) ConvertToProto() *MonthlyBalance {
	return &MonthlyBalance{
		Month:       source.Month,
		NetBalance:  source.NetBalance,
		UserId:      source.UserId,
		ProfileType: transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlyExpenditureInternal struct {
	ch.CHModel    `ch:"MonthlyExpenditure,partition:toYYYYMM(time)"`
	Month         uint32  `ch:"Month,type:UInt32"`
	TotalSpending float64 `ch:"TotalSpending,type:Float64"`
	UserId        string  `ch:"UserId,type:String"`
	ProfileType   string  `ch:"ProfileType"`
}

func (source *MonthlyExpenditureInternal) ConvertToORM() *MonthlyExpenditureORM {
	return &MonthlyExpenditureORM{
		Month:         source.Month,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MonthlyExpenditureORM) ConvertToInternal() *MonthlyExpenditureInternal {
	return &MonthlyExpenditureInternal{
		Month:         source.Month,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MonthlyExpenditureInternal) ConvertToProto() *MonthlyExpenditure {
	return &MonthlyExpenditure{
		Month:         source.Month,
		TotalSpending: source.TotalSpending,
		UserId:        source.UserId,
		ProfileType:   transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlyIncomeInternal struct {
	ch.CHModel  `ch:"MonthlyIncome,partition:toYYYYMM(time)"`
	Month       uint32  `ch:"Month,type:UInt32"`
	TotalIncome float64 `ch:"TotalIncome,type:Float64"`
	UserId      string  `ch:"UserId,type:String"`
	ProfileType string  `ch:"ProfileType"`
}

func (source *MonthlyIncomeInternal) ConvertToORM() *MonthlyIncomeORM {
	return &MonthlyIncomeORM{
		Month:       source.Month,
		TotalIncome: source.TotalIncome,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlyIncomeORM) ConvertToInternal() *MonthlyIncomeInternal {
	return &MonthlyIncomeInternal{
		Month:       source.Month,
		TotalIncome: source.TotalIncome,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlyIncomeInternal) ConvertToProto() *MonthlyIncome {
	return &MonthlyIncome{
		Month:       source.Month,
		TotalIncome: source.TotalIncome,
		UserId:      source.UserId,
		ProfileType: transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlySavingsInternal struct {
	ch.CHModel  `ch:"MonthlySavings,partition:toYYYYMM(time)"`
	Month       uint32  `ch:"Month,type:UInt32"`
	NetSavings  float64 `ch:"NetSavings,type:Float64"`
	UserId      string  `ch:"UserId,type:String"`
	ProfileType string  `ch:"ProfileType"`
}

func (source *MonthlySavingsInternal) ConvertToORM() *MonthlySavingsORM {
	return &MonthlySavingsORM{
		Month:       source.Month,
		NetSavings:  source.NetSavings,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlySavingsORM) ConvertToInternal() *MonthlySavingsInternal {
	return &MonthlySavingsInternal{
		Month:       source.Month,
		NetSavings:  source.NetSavings,
		UserId:      source.UserId,
		ProfileType: source.ProfileType,
	}
}

func (source *MonthlySavingsInternal) ConvertToProto() *MonthlySavings {
	return &MonthlySavings{
		Month:       source.Month,
		NetSavings:  source.NetSavings,
		UserId:      source.UserId,
		ProfileType: transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlyTotalQuantityBySecurityAndUserInternal struct {
	ch.CHModel    `ch:"MonthlyTotalQuantityBySecurityAndUser,partition:toYYYYMM(time)"`
	Month         uint32  `ch:"Month,type:UInt32"`
	SecurityId    string  `ch:"SecurityId,type:String"`
	TotalQuantity float64 `ch:"TotalQuantity,type:Float64"`
	UserId        string  `ch:"UserId,type:String"`
	ProfileType   string  `ch:"ProfileType"`
}

func (source *MonthlyTotalQuantityBySecurityAndUserInternal) ConvertToORM() *MonthlyTotalQuantityBySecurityAndUserORM {
	return &MonthlyTotalQuantityBySecurityAndUserORM{
		Month:         source.Month,
		SecurityId:    source.SecurityId,
		TotalQuantity: source.TotalQuantity,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MonthlyTotalQuantityBySecurityAndUserORM) ConvertToInternal() *MonthlyTotalQuantityBySecurityAndUserInternal {
	return &MonthlyTotalQuantityBySecurityAndUserInternal{
		Month:         source.Month,
		SecurityId:    source.SecurityId,
		TotalQuantity: source.TotalQuantity,
		UserId:        source.UserId,
		ProfileType:   source.ProfileType,
	}
}

func (source *MonthlyTotalQuantityBySecurityAndUserInternal) ConvertToProto() *MonthlyTotalQuantityBySecurityAndUser {
	return &MonthlyTotalQuantityBySecurityAndUser{
		Month:         source.Month,
		SecurityId:    source.SecurityId,
		TotalQuantity: source.TotalQuantity,
		UserId:        source.UserId,
		ProfileType:   transformFinancialProfileType(source.ProfileType),
	}
}

type MonthlyTransactionCountInternal struct {
	ch.CHModel       `ch:"MonthlyTransactionCount,partition:toYYYYMM(time)"`
	Month            uint32 `ch:"Month,type:UInt32"`
	TransactionCount uint64 `ch:"TransactionCount,type:UInt64"`
	UserId           string `ch:"UserId,type:String"`
	ProfileType      string `ch:"ProfileType"`
}

func (source *MonthlyTransactionCountInternal) ConvertToORM() *MonthlyTransactionCountORM {
	return &MonthlyTransactionCountORM{
		Month:            source.Month,
		TransactionCount: source.TransactionCount,
		UserId:           source.UserId,
		ProfileType:      source.ProfileType,
	}
}

func (source *MonthlyTransactionCountORM) ConvertToInternal() *MonthlyTransactionCountInternal {
	return &MonthlyTransactionCountInternal{
		Month:            source.Month,
		TransactionCount: source.TransactionCount,
		UserId:           source.UserId,
		ProfileType:      source.ProfileType,
	}
}

func (source *MonthlyTransactionCountInternal) ConvertToProto() *MonthlyTransactionCount {
	return &MonthlyTransactionCount{
		Month:            source.Month,
		TransactionCount: source.TransactionCount,
		UserId:           source.UserId,
		ProfileType:      transformFinancialProfileType(source.ProfileType),
	}
}

type PaymentChannelMonthlyExpenditureInternal struct {
	ch.CHModel     `ch:"PaymentChannelMonthlyExpenditure,partition:toYYYYMM(time)"`
	Month          uint32  `ch:"Month,type:UInt32"`
	PaymentChannel string  `ch:"PaymentChannel,type:String"`
	TotalSpending  float64 `ch:"TotalSpending,type:Float64"`
	UserId         string  `ch:"UserId,type:String"`
	ProfileType    string  `ch:"ProfileType"`
}

func (source *PaymentChannelMonthlyExpenditureInternal) ConvertToORM() *PaymentChannelMonthlyExpenditureORM {
	return &PaymentChannelMonthlyExpenditureORM{
		Month:          source.Month,
		PaymentChannel: source.PaymentChannel,
		TotalSpending:  source.TotalSpending,
		UserId:         source.UserId,
		ProfileType:    source.ProfileType,
	}
}

func (source *PaymentChannelMonthlyExpenditureORM) ConvertToInternal() *PaymentChannelMonthlyExpenditureInternal {
	return &PaymentChannelMonthlyExpenditureInternal{
		Month:          source.Month,
		PaymentChannel: source.PaymentChannel,
		TotalSpending:  source.TotalSpending,
		UserId:         source.UserId,
		ProfileType:    source.ProfileType,
	}
}

func (source *PaymentChannelMonthlyExpenditureInternal) ConvertToProto() *PaymentChannelMonthlyExpenditure {
	return &PaymentChannelMonthlyExpenditure{
		Month:          source.Month,
		PaymentChannel: source.PaymentChannel,
		TotalSpending:  source.TotalSpending,
		UserId:         source.UserId,
		ProfileType:    transformFinancialProfileType(source.ProfileType),
	}
}

type TotalInvestmentBySecurityInternal struct {
	ch.CHModel      `ch:"TotalInvestmentBySecurity,partition:toYYYYMM(time)"`
	SecurityId      string  `ch:"SecurityId,type:String"`
	TotalInvestment float64 `ch:"TotalInvestment,type:Float64"`
	UserId          string  `ch:"UserId,type:String"`
	ProfileType     string  `ch:"ProfileType"`
}

func (source *TotalInvestmentBySecurityInternal) ConvertToORM() *TotalInvestmentBySecurityORM {
	return &TotalInvestmentBySecurityORM{
		SecurityId:      source.SecurityId,
		TotalInvestment: source.TotalInvestment,
		UserId:          source.UserId,
		ProfileType:     source.ProfileType,
	}
}

func (source *TotalInvestmentBySecurityORM) ConvertToInternal() *TotalInvestmentBySecurityInternal {
	return &TotalInvestmentBySecurityInternal{
		SecurityId:      source.SecurityId,
		TotalInvestment: source.TotalInvestment,
		UserId:          source.UserId,
		ProfileType:     source.ProfileType,
	}
}

func (source *TotalInvestmentBySecurityInternal) ConvertToProto() *TotalInvestmentBySecurity {
	return &TotalInvestmentBySecurity{
		SecurityId:      source.SecurityId,
		TotalInvestment: source.TotalInvestment,
		UserId:          source.UserId,
		ProfileType:     transformFinancialProfileType(source.ProfileType),
	}
}

type CategoryMetricsFinancialSubProfileInternal struct {
	ch.CHModel                     `ch:"CategoryMetricsFinancialSubProfile,partition:toYYYYMM(time)"`
	Month                          uint32  `ch:"Month,type:UInt32"`
	PersonalFinanceCategoryPrimary string  `ch:"PersonalFinanceCategoryPrimary,type:String"`
	TransactionCount               uint64  `ch:"TransactionCount,type:UInt64"`
	SpentLastWeek                  float64 `ch:"SpentLastWeek,type:Float64"`
	SpentLastTwoWeeks              float64 `ch:"SpentLastTwoWeeks,type:Float64"`
	SpentLastMonth                 float64 `ch:"SpentLastMonth,type:Float64"`
	SpentLastSixMonths             float64 `ch:"SpentLastSixMonths,type:Float64"`
	SpentLastYear                  float64 `ch:"SpentLastYear,type:Float64"`
	SpentLastTwoYears              float64 `ch:"SpentLastTwoYears,type:Float64"`
	UserId                         string  `ch:"UserId,type:String"`
	ProfileType                    string  `ch:"ProfileType"`
}

func (source *CategoryMetricsFinancialSubProfileInternal) ConvertToORM() *CategoryMetricsFinancialSubProfileORM {
	return &CategoryMetricsFinancialSubProfileORM{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		SpentLastMonth:                 source.SpentLastMonth,
		SpentLastSixMonths:             source.SpentLastSixMonths,
		SpentLastTwoWeeks:              source.SpentLastTwoWeeks,
		SpentLastTwoYears:              source.SpentLastTwoYears,
		SpentLastWeek:                  source.SpentLastWeek,
		SpentLastYear:                  source.SpentLastYear,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMetricsFinancialSubProfileORM) ConvertToInternal() *CategoryMetricsFinancialSubProfileInternal {
	return &CategoryMetricsFinancialSubProfileInternal{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		SpentLastMonth:                 source.SpentLastMonth,
		SpentLastSixMonths:             source.SpentLastSixMonths,
		SpentLastTwoWeeks:              source.SpentLastTwoWeeks,
		SpentLastTwoYears:              source.SpentLastTwoYears,
		SpentLastWeek:                  source.SpentLastWeek,
		SpentLastYear:                  source.SpentLastYear,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    source.ProfileType,
	}
}

func (source *CategoryMetricsFinancialSubProfileInternal) ConvertToProto() *CategoryMetricsFinancialSubProfile {
	return &CategoryMetricsFinancialSubProfile{
		Month:                          source.Month,
		PersonalFinanceCategoryPrimary: source.PersonalFinanceCategoryPrimary,
		SpentLastMonth:                 source.SpentLastMonth,
		SpentLastSixMonths:             source.SpentLastSixMonths,
		SpentLastTwoWeeks:              source.SpentLastTwoWeeks,
		SpentLastTwoYears:              source.SpentLastTwoYears,
		SpentLastWeek:                  source.SpentLastWeek,
		SpentLastYear:                  source.SpentLastYear,
		TransactionCount:               source.TransactionCount,
		UserId:                         source.UserId,
		ProfileType:                    transformFinancialProfileType(source.ProfileType),
	}
}

type IncomeMetricsFinancialSubProfileInternal struct {
	ch.CHModel          `ch:"IncomeMetricsFinancialSubProfile,partition:toYYYYMM(time)"`
	Month               uint32  `ch:"Month,type:UInt32"`
	IncomeLastTwoWeeks  float64 `ch:"IncomeLastTwoWeeks,type:Float64"`
	IncomeLastMonth     float64 `ch:"IncomeLastMonth,type:Float64"`
	IncomeLastTwoMonths float64 `ch:"IncomeLastTwoMonths,type:Float64"`
	IncomeLastSixMonths float64 `ch:"IncomeLastSixMonths,type:Float64"`
	IncomeLastYear      float64 `ch:"IncomeLastYear,type:Float64"`
	UserId              string  `ch:"UserId,type:String"`
	ProfileType         string  `ch:"ProfileType"`
}

func (source *IncomeMetricsFinancialSubProfileInternal) ConvertToORM() *IncomeMetricsFinancialSubProfileORM {
	return &IncomeMetricsFinancialSubProfileORM{
		Month:               source.Month,
		IncomeLastMonth:     source.IncomeLastMonth,
		IncomeLastSixMonths: source.IncomeLastSixMonths,
		IncomeLastTwoMonths: source.IncomeLastTwoMonths,
		IncomeLastTwoWeeks:  source.IncomeLastTwoWeeks,
		IncomeLastYear:      source.IncomeLastYear,
		UserId:              source.UserId,
		ProfileType:         source.ProfileType,
	}
}

func (source *IncomeMetricsFinancialSubProfileORM) ConvertToInternal() *IncomeMetricsFinancialSubProfileInternal {
	return &IncomeMetricsFinancialSubProfileInternal{
		Month:               source.Month,
		IncomeLastMonth:     source.IncomeLastMonth,
		IncomeLastSixMonths: source.IncomeLastSixMonths,
		IncomeLastTwoMonths: source.IncomeLastTwoMonths,
		IncomeLastTwoWeeks:  source.IncomeLastTwoWeeks,
		IncomeLastYear:      source.IncomeLastYear,
		UserId:              source.UserId,
		ProfileType:         source.ProfileType,
	}
}

func (source *IncomeMetricsFinancialSubProfileInternal) ConvertToProto() *IncomeMetricsFinancialSubProfile {
	return &IncomeMetricsFinancialSubProfile{
		Month:               source.Month,
		IncomeLastMonth:     source.IncomeLastMonth,
		IncomeLastSixMonths: source.IncomeLastSixMonths,
		IncomeLastTwoMonths: source.IncomeLastTwoMonths,
		IncomeLastTwoWeeks:  source.IncomeLastTwoWeeks,
		IncomeLastYear:      source.IncomeLastYear,
		UserId:              source.UserId,
		ProfileType:         transformFinancialProfileType(source.ProfileType),
	}
}

type ExpenseMetricsFinancialSubProfileMetricsInternal struct {
	ch.CHModel                          `ch:"ExpenseMetricsFinancialSubProfileMetrics,partition:toYYYYMM(time)"`
	Month                               uint32  `ch:"Month,type:UInt32"`
	SpentLastWeek                       float64 `ch:"SpentLastWeek,type:Float64"`
	SpentLastMonth                      float64 `ch:"SpentLastMonth,type:Float64"`
	SpentLastSixMonths                  float64 `ch:"SpentLastSixMonths,type:Float64"`
	AverageMonthlyDiscretionarySpending float64 `ch:"AverageMonthlyDiscretionarySpending,type:Float64"`
	AverageMonthlyRecurringSpending     float64 `ch:"AverageMonthlyRecurringSpending,type:Float64"`
	UserId                              string  `ch:"UserId,type:String"`
	ProfileType                         string  `ch:"ProfileType"`
}

func (source *ExpenseMetricsFinancialSubProfileMetricsInternal) ConvertToORM() *ExpenseMetricsFinancialSubProfileMetricsORM {
	return &ExpenseMetricsFinancialSubProfileMetricsORM{
		AverageMonthlyDiscretionarySpending: source.AverageMonthlyDiscretionarySpending,
		AverageMonthlyRecurringSpending:     source.AverageMonthlyRecurringSpending,
		Month:                               source.Month,
		SpentLastMonth:                      source.SpentLastMonth,
		SpentLastSixMonths:                  source.SpentLastSixMonths,
		SpentLastWeek:                       source.SpentLastWeek,
		UserId:                              source.UserId,
		ProfileType:                         source.ProfileType,
	}
}

func (source *ExpenseMetricsFinancialSubProfileMetricsORM) ConvertToInternal() *ExpenseMetricsFinancialSubProfileMetricsInternal {
	return &ExpenseMetricsFinancialSubProfileMetricsInternal{
		Month:                               source.Month,
		AverageMonthlyDiscretionarySpending: source.AverageMonthlyDiscretionarySpending,
		AverageMonthlyRecurringSpending:     source.AverageMonthlyRecurringSpending,
		SpentLastSixMonths:                  source.SpentLastSixMonths,
		SpentLastMonth:                      source.SpentLastMonth,
		SpentLastWeek:                       source.SpentLastWeek,
		UserId:                              source.UserId,
		ProfileType:                         source.ProfileType,
	}
}

func (source *ExpenseMetricsFinancialSubProfileMetricsInternal) ConvertToProto() *ExpenseMetricsFinancialSubProfileMetrics {
	return &ExpenseMetricsFinancialSubProfileMetrics{
		Month:                               source.Month,
		SpentLastWeek:                       source.SpentLastWeek,
		SpentLastMonth:                      source.SpentLastMonth,
		SpentLastSixMonths:                  source.SpentLastSixMonths,
		AverageMonthlyDiscretionarySpending: source.AverageMonthlyDiscretionarySpending,
		AverageMonthlyRecurringSpending:     source.AverageMonthlyRecurringSpending,
		UserId:                              source.UserId,
		ProfileType:                         transformFinancialProfileType(source.ProfileType),
	}
}

type LocationFinancialSubProfileInternal struct {
	ch.CHModel         `ch:"LocationFinancialSubProfile,partition:toYYYYMM(time)"`
	Month              uint32  `ch:"Month,type:UInt32"`
	LocationCity       string  `ch:"LocationCity,type:String"`
	TransactionCount   uint64  `ch:"TransactionCount,type:UInt64"`
	SpentLastWeek      float64 `ch:"SpentLastWeek,type:Float64"`
	SpentLastTwoWeeks  float64 `ch:"SpentLastTwoWeeks,type:Float64"`
	SpentLastMonth     float64 `ch:"SpentLastMonth,type:Float64"`
	SpentLastSixMonths float64 `ch:"SpentLastSixMonths,type:Float64"`
	SpentLastYear      float64 `ch:"SpentLastYear,type:Float64"`
	SpentLastTwoYears  float64 `ch:"SpentLastTwoYears,type:Float64"`
	UserId             string  `ch:"UserId,type:String"`
	ProfileType        string  `ch:"ProfileType"`
}

func (source *LocationFinancialSubProfileInternal) ConvertToORM() *LocationFinancialSubProfileORM {
	return &LocationFinancialSubProfileORM{
		LocationCity:       source.LocationCity,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *LocationFinancialSubProfileORM) ConvertToInternal() *LocationFinancialSubProfileInternal {
	return &LocationFinancialSubProfileInternal{
		LocationCity:       source.LocationCity,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *LocationFinancialSubProfileInternal) ConvertToProto() *LocationFinancialSubProfile {
	return &LocationFinancialSubProfile{
		LocationCity:       source.LocationCity,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        transformFinancialProfileType(source.ProfileType),
	}
}

type MerchantMetricsFinancialSubProfileInternal struct {
	ch.CHModel         `ch:"MerchantMetricsFinancialSubProfile,partition:toYYYYMM(time)"`
	Month              uint32  `ch:"Month,type:UInt32"`
	SpentLastWeek      float64 `ch:"SpentLastWeek,type:Float64"`
	SpentLastTwoWeeks  float64 `ch:"SpentLastTwoWeeks,type:Float64"`
	SpentLastMonth     float64 `ch:"SpentLastMonth,type:Float64"`
	SpentLastSixMonths float64 `ch:"SpentLastSixMonths,type:Float64"`
	SpentLastYear      float64 `ch:"SpentLastYear,type:Float64"`
	SpentLastTwoYears  float64 `ch:"SpentLastTwoYears,type:Float64"`
	UserId             string  `ch:"UserId,type:String"`
	MerchantName       string  `ch:"MerchantName,type:String"`
	ProfileType        string  `ch:"ProfileType"`
}

func (source *MerchantMetricsFinancialSubProfileInternal) ConvertToORM() *MerchantMetricsFinancialSubProfileORM {
	return &MerchantMetricsFinancialSubProfileORM{
		MerchantName:       source.MerchantName,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *MerchantMetricsFinancialSubProfileORM) ConvertToInternal() *MerchantMetricsFinancialSubProfileInternal {
	return &MerchantMetricsFinancialSubProfileInternal{
		MerchantName:       source.MerchantName,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *MerchantMetricsFinancialSubProfileInternal) ConvertToProto() *MerchantMetricsFinancialSubProfile {
	return &MerchantMetricsFinancialSubProfile{
		MerchantName:       source.MerchantName,
		Month:              source.Month,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		UserId:             source.UserId,
		ProfileType:        transformFinancialProfileType(source.ProfileType),
	}
}

type PaymentChannelMetricsFinancialSubProfileInternal struct {
	ch.CHModel         `ch:"PaymentChannelMetricsFinancialSubProfile,partition:toYYYYMM(time)"`
	Month              uint32  `ch:"Month,type:UInt32"`
	PaymentChannel     string  `ch:"PaymentChannel,type:String"`
	TransactionCount   uint64  `ch:"TransactionCount,type:UInt64"`
	SpentLastWeek      float64 `ch:"SpentLastWeek,type:Float64"`
	SpentLastTwoWeeks  float64 `ch:"SpentLastTwoWeeks,type:Float64"`
	SpentLastMonth     float64 `ch:"SpentLastMonth,type:Float64"`
	SpentLastSixMonths float64 `ch:"SpentLastSixMonths,type:Float64"`
	SpentLastYear      float64 `ch:"SpentLastYear,type:Float64"`
	SpentLastTwoYears  float64 `ch:"SpentLastTwoYears,type:Float64"`
	UserId             string  `ch:"UserId,type:String"`
	ProfileType        string  `ch:"ProfileType"`
}

func (source *PaymentChannelMetricsFinancialSubProfileInternal) ConvertToORM() *PaymentChannelMetricsFinancialSubProfileORM {
	return &PaymentChannelMetricsFinancialSubProfileORM{
		Month:              source.Month,
		PaymentChannel:     source.PaymentChannel,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *PaymentChannelMetricsFinancialSubProfileORM) ConvertToInternal() *PaymentChannelMetricsFinancialSubProfileInternal {
	return &PaymentChannelMetricsFinancialSubProfileInternal{
		Month:              source.Month,
		PaymentChannel:     source.PaymentChannel,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        source.ProfileType,
	}
}

func (source *PaymentChannelMetricsFinancialSubProfileInternal) ConvertToProto() *PaymentChannelMetricsFinancialSubProfile {
	return &PaymentChannelMetricsFinancialSubProfile{
		Month:              source.Month,
		PaymentChannel:     source.PaymentChannel,
		SpentLastMonth:     source.SpentLastMonth,
		SpentLastSixMonths: source.SpentLastSixMonths,
		SpentLastTwoWeeks:  source.SpentLastTwoWeeks,
		SpentLastTwoYears:  source.SpentLastTwoYears,
		SpentLastWeek:      source.SpentLastWeek,
		SpentLastYear:      source.SpentLastYear,
		TransactionCount:   source.TransactionCount,
		UserId:             source.UserId,
		ProfileType:        transformFinancialProfileType(source.ProfileType),
	}
}
