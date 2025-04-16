# @qubit-ltd/common-validation-rule

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-validation-rule.svg)](https://npmjs.com/package/@qubit-ltd/common-validation-rule)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-validation-rule/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-validation-rule/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-validation-rule/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-validation-rule?branch=master)

[@qubit-ltd/common-validation-rule] 是一个提供常用验证规则的JavaScript ES6库。

## <span id="目录">目录</span>

- [安装](#安装)
- [使用方法](#使用方法)
- [API文档](#API文档)
- [贡献](#贡献)
- [许可证](#许可证)

## <span id="安装">安装</span>

使用npm安装:

```bash
npm install @qubit-ltd/common-validation-rule
```

或使用yarn安装:

```bash
yarn add @qubit-ltd/common-validation-rule
```

## <span id="使用方法">使用方法</span>

### 导入验证规则

```javascript
// 导入特定的验证规则
import { EmailRule, PasswordRule, UsernameRule } from '@qubit-ltd/common-validation-rule';

// 验证电子邮件地址
const isValidEmail = EmailRule.isValid('example@example.com'); // 返回 true

// 验证密码
const isValidPassword = PasswordRule.isValid('Password123'); // 根据密码规则返回 true 或 false

// 验证用户名
const isValidUsername = UsernameRule.isValid('user123'); // 根据用户名规则返回 true 或 false
```

### 使用ValidationResult

```javascript
import { ValidationResult } from '@qubit-ltd/common-validation-rule';

// 创建验证结果
const validResult = new ValidationResult(true, '验证成功');
const invalidResult = new ValidationResult(false, '验证失败');

// 合并多个验证结果
const results = [
  new ValidationResult(true, '第一项验证成功'),
  new ValidationResult(false, '第二项验证失败'),
  new ValidationResult(false, '第三项验证失败')
];

const mergedResult = ValidationResult.merge(results);
// mergedResult 将包含所有失败的验证结果，形成一个链式结构
```

## <span id="API文档">API文档</span>

### 验证规则

库提供了以下常用验证规则：

- **AlphaNumberRule**: 验证字符串是否只包含字母和数字
- **BoolRule**: 验证值是否为布尔值
- **ChinaIdentityCardRule**: 验证中国身份证号码
- **ChinaMobileRule**: 验证中国手机号码
- **ChinaOfficerCardRule**: 验证中国军官证号码
- **ChinaPassportRule**: 验证中国护照号码
- **ChinaPhoneRule**: 验证中国电话号码（包括座机）
- **EmailRule**: 验证电子邮件地址
- **IntegerRule**: 验证整数
- **LocalDateRule**: 验证本地日期格式
- **LocalDateTimeRule**: 验证本地日期时间格式
- **LocalTimeRule**: 验证本地时间格式
- **NumberRule**: 验证数字
- **NumericRule**: 验证数值型字符串
- **OtherCredentialRule**: 验证其他证件号码
- **PasswordRule**: 验证密码
- **PersonNameRule**: 验证人名
- **TimestampRule**: 验证时间戳
- **UppercaseAlphaNumberRule**: 验证大写字母和数字组合
- **UrlRule**: 验证URL地址
- **UsernameRule**: 验证用户名
- **VerifyCodeRule**: 验证验证码

### ValidationResult

`ValidationResult` 类用于表示验证的结果，并可以将多个验证结果合并。

#### 属性

- `success`: 表示验证是否成功
- `description`: 验证结果的描述
- `next`: 下一个验证结果，用于链接多个失败的验证结果

#### 方法

- `constructor(success = true, description = '')`: 创建一个新的验证结果对象
- `static merge(results)`: 合并多个验证结果对象

## <span id="贡献">贡献</span>

如果您发现任何问题或有改进建议，欢迎在[GitHub仓库]提出issue或提交pull request。

## <span id="许可证">许可证</span>

[@qubit-ltd/common-validation-rule] 在Apache 2.0许可证下分发。
详情请参阅[LICENSE](LICENSE)文件。

[@qubit-ltd/common-validation-rule]: https://npmjs.com/package/@qubit-ltd/common-validation-rule
[GitHub仓库]: https://github.com/Haixing-Hu/js-common-validation-rule 