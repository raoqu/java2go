/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from 'antd'
import { Button, Form, Input, Space, Tooltip, Typography } from 'antd';
import ConfigContext from '../config'
import { useState, useContext, useEffect } from 'react';

const Settings = () => {
    const [form] = Form.useForm();
    const config = useContext(ConfigContext);
    const [llm_api, setLLMApi] = useState(config.llm_api)
    const [tts_api,] = useState(config.tts_api)
    const [llm_key,] = useState(config.llm_key)
    const [translate_count,] = useState(config.translate_count)
    const [initConfig,] = useState(config)

    useEffect(() => {
        form.setFieldsValue({
            llm_api: llm_api,
            tts_api: tts_api,
            llm_key: llm_key,
            translate_count: translate_count,
        })
    }, [form, llm_api, llm_key, tts_api, translate_count])

    const onFinish = (values: any) => {
        console.log(values);
        config.llm_api = values.llm_api
        config.tts_api = values.tts_api
        config.llm_key = values.llm_key
        config.translate_count = values.translate_count
    };

    const updateApi = (api: string) => {
        console.log(api)
        setLLMApi(api)
        // config.llm_api = api;
        form.setFieldValue('api', api);
    }

    return (
        <div>
            <Card style={{ marginBottom: '8px' }}>Settings</Card>
            <Card style={{ textAlign: 'left' }}>
                <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} form={form} initialValues={initConfig}>
                    <Form.Item label="大模型API">
                        <Space>
                            <Form.Item name="llm_api" noStyle /*rules={[{ required: true, message: 'API 是必需的' }]}*/>
                                <Input style={{ width: 400 }} placeholder="Please input" />
                            </Form.Item>
                            <Tooltip title="使用本地大模型接口">
                                <Typography.Link onClick={() => updateApi('http://127.0.0.1:1234/v1/chat/completions')}>[默认]</Typography.Link>
                            </Tooltip>
                            <Tooltip title="使用OpenAI">
                                <Typography.Link onClick={() => updateApi('https://platform.openai.com/v1/chat/completions')}>[OpenAI]</Typography.Link>
                            </Tooltip>
                        </Space>
                    </Form.Item>
                    <Form.Item label="语音生成API" name="tts_api">
                        <Input style={{ width: 400 }} placeholder="Please input" />
                    </Form.Item>
                    <Form.Item label="API KEY" name="llm_key">
                        <Input style={{ width: 400 }} placeholder="Please input" />
                    </Form.Item>
                    <Form.Item label="单次翻译句子数量" name="translate_count">
                        <Input style={{ width: 400 }} placeholder="Please input" />
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            修改配置
                        </Button>
                        <Button htmlType="reset">
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Settings;