import { mkdirSync } from 'fs';
import { generateTsModels, nrsrxTypeFilterCallBack, nrsrxValuePropertyTypeFilterCallBack } from '..';
import { ValidateFiles } from './app.spec';
import { IGeneratorOptions } from '../models/generator-options';

const accountGenerationOptionsFactory = (): IGeneratorOptions => ({
  openApiJsonFileName: './open-api-spec-docs/mstr-acct.json',
  outputPath: './jest_output/acct/',
  typeFilterCallBack: nrsrxTypeFilterCallBack,
  valuePropertyTypeFilterCallBack: nrsrxValuePropertyTypeFilterCallBack,
  genAngularFormGroups: true,
});

describe('Url Based - Full Integration Tests', () => {
  describe('MasterCorp Account Service', () => {
    it('should generate files', async () => {
      const options = accountGenerationOptionsFactory();
      try {
        mkdirSync(options.outputPath, { recursive: true });
      } catch {
        // ignore
      }
      await generateTsModels(options);
      ValidateFiles(options);
    });
  });
});
