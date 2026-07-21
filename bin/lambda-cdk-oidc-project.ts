#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaCdkOidcProjectStack } from '../lib/lambda-cdk-oidc-project-stack';

const app = new cdk.App();

new LambdaCdkOidcProjectStack(app, 'LambdaCdkOidcProjectStack', {});