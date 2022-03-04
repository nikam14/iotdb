/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FunctionComponent } from 'react';
import { SegmentInput } from '@grafana/ui';
import React from 'react';

export interface Props {
  condition: string;
  onChange: (conditionStr: string) => void;
}

export const WhereValue: FunctionComponent<Props> = ({ condition, onChange }) => (
  <>
    {
      <>
        <SegmentInput
          className="min-width-8"
          placeholder="(optional)"
          value={condition}
          onChange={string => onChange(string.toString())}
        />
      </>
    }
  </>
);