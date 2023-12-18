// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: accounting_service/v1/business_profile_database_schema.proto

package accounting_servicev1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on MergeBusinessProfile with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *MergeBusinessProfile) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on MergeBusinessProfile with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// MergeBusinessProfileMultiError, or nil if none found.
func (m *MergeBusinessProfile) ValidateAll() error {
	return m.validate(true)
}

func (m *MergeBusinessProfile) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if m.GetUserId() <= 0 {
		err := MergeBusinessProfileValidationError{
			field:  "UserId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for CompanyName

	// no validation rules for Email

	for idx, item := range m.GetAccountingIntegrationMergeLink() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("AccountingIntegrationMergeLink[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("AccountingIntegrationMergeLink[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return MergeBusinessProfileValidationError{
					field:  fmt.Sprintf("AccountingIntegrationMergeLink[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetPayrollIntegrationMergeLink() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("PayrollIntegrationMergeLink[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("PayrollIntegrationMergeLink[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return MergeBusinessProfileValidationError{
					field:  fmt.Sprintf("PayrollIntegrationMergeLink[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetActionablePersonalInsights() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("ActionablePersonalInsights[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, MergeBusinessProfileValidationError{
						field:  fmt.Sprintf("ActionablePersonalInsights[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return MergeBusinessProfileValidationError{
					field:  fmt.Sprintf("ActionablePersonalInsights[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return MergeBusinessProfileMultiError(errors)
	}

	return nil
}

// MergeBusinessProfileMultiError is an error wrapping multiple validation
// errors returned by MergeBusinessProfile.ValidateAll() if the designated
// constraints aren't met.
type MergeBusinessProfileMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MergeBusinessProfileMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MergeBusinessProfileMultiError) AllErrors() []error { return m }

// MergeBusinessProfileValidationError is the validation error returned by
// MergeBusinessProfile.Validate if the designated constraints aren't met.
type MergeBusinessProfileValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MergeBusinessProfileValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MergeBusinessProfileValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MergeBusinessProfileValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MergeBusinessProfileValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MergeBusinessProfileValidationError) ErrorName() string {
	return "MergeBusinessProfileValidationError"
}

// Error satisfies the builtin error interface
func (e MergeBusinessProfileValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMergeBusinessProfile.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MergeBusinessProfileValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MergeBusinessProfileValidationError{}
