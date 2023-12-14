#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AwsLambdaAsyncInitTimestampsStack } from "./aws-lambda-async-init-timestamps-stack";

const app = new cdk.App();
new AwsLambdaAsyncInitTimestampsStack(app, "AwsLambdaAsyncInitTimestamps");
