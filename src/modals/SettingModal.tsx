import { Button, Form, Input, message, Modal } from "antd"
import { useModal } from "../global/useModal"
import { useLoading } from "../global/useLoading"
import { useCallback, useEffect } from "react"

const loadingKey = "setting-request"

function waitForTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout completed")
    }, delay)
  })
}

type FormItems = {
  location: string
}

export default function SettingModal() {
  const { fields, setField, removeField } = useLoading()

  const loading = fields.includes(loadingKey)

  const { getState, closeModal } = useModal()

  const isOpen = getState("setting") || loading

  const onFinish = async (values: any) => {
    console.log("Success:", values)
    setField(loadingKey)

    await waitForTimeout(3000)

    removeField(loadingKey)
  }

  const getServerValues = useCallback(async (signal: AbortSignal) => {
    try {
      setField(loadingKey)

      await waitForTimeout(3000)

      removeField(loadingKey)
    } catch (error) {
      message.error("Server responded with Error please try again later.")
      closeModal()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    if (isOpen) getServerValues(controller.signal)

    return () => controller.abort()
  }, [isOpen])

  return (
    <Modal
      open={isOpen}
      footer={null}
      destroyOnClose
      title="Setting"
      onCancel={closeModal}
    >
      <Form
        disabled={loading}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item<FormItems>
          label="Folder Path"
          name="location"
          rules={[{ required: true, message: "Please enter the file path!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
