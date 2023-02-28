import React, { useEffect, useState } from 'react'

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';

import './CustomEditor.css';
import '@aws-amplify/ui-react/styles.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '@draft-js-plugins/side-toolbar/lib/plugin.css';
import '@draft-js-plugins/emoji/lib/plugin.css';

const CustomEditor = (props) => {
    const [editorState, setEditorState] = useState(props.contentState ? EditorState.createWithContent(convertFromRaw(props.contentState)) : EditorState.createEmpty())
    const [emojiPlugin, setEmojiPlugin] = useState(createEmojiPlugin())

    const [inlineToolbarPlugin, setInlineToolbarPlugin] = useState(createInlineToolbarPlugin())
    const [sideToolbarPlugin, setsideToolbarPlugin] = useState(createSideToolbarPlugin())

    const { SideToolbar } = sideToolbarPlugin
    const { EmojiSuggestions } = emojiPlugin
    const { InlineToolbar } = inlineToolbarPlugin
    


    const onChange = (editorState) => {
        setEditorState(editorState)
        if (props.onChange) {
            props.onChange(convertToRaw(editorState.getCurrentContent()))
        }
        
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            onChange(newState);
            return 'handled';
        }

        return 'not handled';
    }

    useEffect(() => {
        console.log(props.contentState)
    },[])


    return (
        <div>
            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={onChange}
                plugins={[emojiPlugin,inlineToolbarPlugin,sideToolbarPlugin]}
                readOnly={props.readOnly}
            />
            <SideToolbar />
            <InlineToolbar />
            <EmojiSuggestions warn />

        </div>
    )
}

export default CustomEditor