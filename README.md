# @qubit-ltd/common-validation-rule

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-validation-rule.svg)](https://npmjs.com/package/@qubit-ltd/common-validation-rule)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-validation-rule/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-validation-rule/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-validation-rule/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-validation-rule?branch=master)

[@qubit-ltd/common-validation-rule] is a JavaScript ES6 library of common validation rules.

## <span id="table-of-contents">Table of Contents</span>

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## <span id="installation">Installation</span>

Install with npm:

```bash
npm install @qubit-ltd/common-validation-rule
```

Or with yarn:

```bash
yarn add @qubit-ltd/common-validation-rule
```

## <span id="usage">Usage</span>

### Importing Validation Rules

```javascript
// Import specific validation rules
import { EmailRule, PasswordRule, UsernameRule } from '@qubit-ltd/common-validation-rule';

// Validate an email address
const isValidEmail = EmailRule.isValid('example@example.com'); // returns true

// Validate a password
const isValidPassword = PasswordRule.isValid('Password123'); // returns true or false based on password rules

// Validate a username
const isValidUsername = UsernameRule.isValid('user123'); // returns true or false based on username rules
```

### Using ValidationResult

```javascript
import { ValidationResult } from '@qubit-ltd/common-validation-rule';

// Create validation results
const validResult = new ValidationResult(true, 'Validation succeeded');
const invalidResult = new ValidationResult(false, 'Validation failed');

// Merge multiple validation results
const results = [
  new ValidationResult(true, 'First validation succeeded'),
  new ValidationResult(false, 'Second validation failed'),
  new ValidationResult(false, 'Third validation failed')
];

const mergedResult = ValidationResult.merge(results);
// mergedResult will contain all failed validation results, forming a chain structure
```

## <span id="api-documentation">API Documentation</span>

### Validation Rules

The library provides the following common validation rules:

- **AlphaNumberRule**: Validates if a string contains only letters and numbers
- **BoolRule**: Validates if a value is a boolean
- **ChinaIdentityCardRule**: Validates Chinese ID card numbers
- **ChinaMobileRule**: Validates Chinese mobile phone numbers
- **ChinaOfficerCardRule**: Validates Chinese officer card numbers
- **ChinaPassportRule**: Validates Chinese passport numbers
- **ChinaPhoneRule**: Validates Chinese phone numbers (including landlines)
- **EmailRule**: Validates email addresses
- **IntegerRule**: Validates integers
- **LocalDateRule**: Validates local date formats
- **LocalDateTimeRule**: Validates local date-time formats
- **LocalTimeRule**: Validates local time formats
- **NumberRule**: Validates numbers
- **NumericRule**: Validates numeric strings
- **OtherCredentialRule**: Validates other credential numbers
- **PasswordRule**: Validates passwords
- **PersonNameRule**: Validates person names
- **TimestampRule**: Validates timestamps
- **UppercaseAlphaNumberRule**: Validates combinations of uppercase letters and numbers
- **UrlRule**: Validates URLs
- **UsernameRule**: Validates usernames
- **VerifyCodeRule**: Validates verification codes

### ValidationResult

The `ValidationResult` class represents the result of a validation and can merge multiple validation results.

#### Properties

- `success`: Indicates whether the validation was successful
- `description`: Description of the validation result
- `next`: The next validation result, used to link multiple failed validation results

#### Methods

- `constructor(success = true, description = '')`: Creates a new validation result object
- `static merge(results)`: Merges multiple validation result objects

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[@qubit-ltd/common-validation-rule] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[@qubit-ltd/common-validation-rule]: https://npmjs.com/package/@qubit-ltd/common-validation-rule
[GitHub repository]: https://github.com/Haixing-Hu/js-common-validation-rule
