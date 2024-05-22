import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('36d6f944-0ea0-47a9-ab31-cac78f9c0503', props.user.username, props.user.secret);
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style = {{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage;