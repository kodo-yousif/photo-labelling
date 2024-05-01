import { Form, Input, Modal } from "antd"
import { useModal } from "../global/useModal"
import { useBasicPath } from "../global/useBasicPath"

export default function SettingModal() {
  const { path, setPath } = useBasicPath()
  const { getState, closeModal } = useModal()

  const isOpen = getState("setting")

  return (
    <Modal
      open={isOpen}
      footer={null}
      destroyOnClose
      title="Setting"
      onCancel={closeModal}
    >
      <Form layout="vertical">
        <Form.Item label="Folder Path">
          <Input.TextArea
            value={path}
            onChange={(event) => setPath(event.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
