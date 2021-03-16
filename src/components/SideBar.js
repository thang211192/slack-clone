import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import db, { auth } from '../firebase';
import SideBarOption from './SideBarOption';



function SideBar() {
    const [user] = useAuthState(auth);
    const [channels] = useCollection(
        db.collection('rooms'));

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        vanthang
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon} title="Threads" />
            <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SideBarOption Icon={DraftsIcon} title="Saved item" />
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SideBarOption Icon={AppsIcon} title="Apps" />
            <SideBarOption Icon={FileCopyIcon} title="File browser" />
            <SideBarOption Icon={ExpandLessIcon} title="Show less" />

            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />
                
            {channels?.docs.map((doc) => (
                <SideBarOption
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
                />
            ))}

        </SideBarContainer>
    )
}

export default SideBar

//Style css

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
    border-bottom: 1px solid #49274b;
    display: flex;
    padding: 13px;

    >.MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SideBarInfo = styled.div`
    flex: 1;

    >h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 >.MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
