
import React from 'react';
import { PanelProps, SelectableValue } from '@grafana/data';
import { SimpleOptions } from 'types';
import { 
  Button, 
  HorizontalGroup, 
  Icon, 
  InlineLabel, 
  Input, 
  Label, 
  Legend, 
  Pagination, 
  Select, 
  VerticalGroup, 
  DeleteButton,
  Field,
  InlineField,
  Switch,
  Cascader,
  Table,
  } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height}) => {


  return (
    <React.Fragment>
      <div className="panel-container" style={{ width: 'auto', borderColor: '#141619' }}>
        <div className="row">


          <div className="col-sm">
            <br/>
            <h1>Custom Product</h1>
            <VerticalGroup spacing={'sm'} justify={'flex-start'} align={'flex-start'}>
              <HorizontalGroup spacing={'md'}>
                <Select 
                  className={'width-12'} 
                  onChange={function (value: SelectableValue): void | {} {
                    throw new Error('Function not implemented.');
                  }}
                />
                <Button 
                  size={'sm'} 
                  icon={'plug'} 
                  variant={'primary'} 
                />
                <Input css={undefined} />
                <DeleteButton
                  size={'sm'}
                  disabled={false}
                  onConfirm={() => {}}
                />
              </HorizontalGroup>
              <HorizontalGroup spacing={'md'}>
                <Select 
                  className={'width-12'} 
                  onChange={function (value: SelectableValue): void | {} {
                    throw new Error('Function not implemented.');
                  }}
                />
                <Button 
                  size={'sm'} 
                  icon={'plug'} 
                  variant={'primary'} 
                />
                <Input css={undefined} />
                <DeleteButton
                  size={'sm'}
                  disabled={false}
                  onConfirm={() => {}}
                />
              </HorizontalGroup>
                <Button 
                  style={{margin: '20% 0 10% 200%'}} 
                  size={'md'} 
                  icon={'plus'} 
                  variant={'primary'}
                >
                Add
                </Button>
              <InlineLabel className={'width-22'}  style={{ background: '#202226' }} >211-BRT-F</InlineLabel>
                <Button 
                  style={{marginLeft:'85%', marginTop: '25%'}} 
                  size={'md'} 
                  icon={'eye'} 
                  variant={'primary'}
                >
                Preview chart
                </Button>
                <h3 style={{ marginTop: '10%'}} >Save product</h3>
                <Field label={'Expresion name'} description={''} >
                  <Input id='' onChange={() => {}} className={'width-22'} css={undefined}/>
                </Field>
                <InlineField label="Not approved" grow>
                  <Switch onChange={() =>{}} css={undefined} />
                </InlineField>
                <Button 
                  style={{marginTop: '10%'}} 
                  size={'md'} 
                  icon={'save'} 
                  variant={'primary'}
                >
                Preview chart
                </Button>
            </VerticalGroup>
          </div>


          <div className="col-sm">
            <br/>
            <h3>Product finder</h3>
           <VerticalGroup spacing={'none'} justify={'flex-start'} align={'flex-start'}>
              <HorizontalGroup spacing={'none'}>
                <Label className={'width-10'}>Source</Label>
                <Label className={'width-10'}>Contract</Label>
              </HorizontalGroup>
              <HorizontalGroup  spacing={'none'} justify={'flex-start'} align={'flex-start'}>
                <Cascader options={[]} onSelect={() => {}} />
                <Select className={'width-10'} onChange={function (value: SelectableValue): void | {} {
                  throw new Error('Function not implemented.');
                } }  />
                <Button icon={'arrow-right'}>Get Products</Button>            
              </HorizontalGroup>
              <Legend children={undefined}></Legend>
              <h4>Product name</h4>
              <Input className={'width-17'} prefix={<Icon name="search" />} css={undefined} />
  
              <div className="panel-container" style={{ width: 'auto' }}>
                <Table data={data.series[0]} height={350} width={450}  />
              </div>

            </VerticalGroup>
          </div>


        </div>
        <HorizontalGroup spacing={'xs'} justify={'flex-end'} align={'flex-end'}>
          <Pagination currentPage={1} numberOfPages={10} onNavigate={() => {}} />
        </HorizontalGroup>
      </div>   
    </React.Fragment>
  );
};



