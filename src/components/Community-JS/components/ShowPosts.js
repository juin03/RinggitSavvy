// import React, { useState } from 'react'
// import { View, Text, TouchableOpacity, Modal, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
// import Colors from './../utils/Colors';
// import Icon from 'react-native-vector-icons/Entypo';
// import { deviceWidth } from './Dimensions';
// import Images from './../utils/Images';
// import CustomIcon from './CustomIcon';


// export default function ShowPosts({ item }) {

//   // Introduce a local state for managing like status
//   const [isLiked, setIsLiked] = useState(item.isLiked);
//   const [likesCount, setLikesCount] = useState(item.likes);
//   const [commentModalVisible, setCommentModalVisible] = useState(false); // New state for modal visibility
//   const [comments, setComments] = useState(item.initialComments || []);
//   const [newCommentText, setNewCommentText] = useState('');
  


//   // Modify toggleLike to also increment/decrement likes count
//   const toggleLike = () => {
//     if (isLiked) {
//       // If currently liked, decrement likes count
//       setLikesCount(likesCount - 1);
//     } else {
//       // If currently not liked, increment likes count
//       setLikesCount(likesCount + 1);
//     }
//     setIsLiked(!isLiked);
//   };

//   const submitComment = () => {
//     const newComment = {
//       id: comments.length + 1, // Simple ID assignment; use a better ID generation in a real app
//       text: newCommentText,
//       // Add more fields as needed, e.g., isLiked, likesCount for each comment
//     };
//     setComments([...comments, newComment]);
//     setNewCommentText(''); // Clear input after submission
//   };


//   return (
//     <View style={{ backgroundColor: Colors.WHITE, marginVertical: 5, paddingVertical: 10 }}>
//       {/* Comment Modal */}
//       <Modal
//         animationType="slide"
//         transparent={false} // Change to false for full-screen modal
//         visible={commentModalVisible}
//         onRequestClose={() => {
//           setCommentModalVisible(!commentModalVisible);
//         }}
//       >
//         <View style={{ flex: 1, marginTop: 22 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
//             <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Comments</Text>
//             <TouchableOpacity
//               onPress={() => setCommentModalVisible(false)}
//               style={{
//                 backgroundColor: '#6998AB',
//                 padding: 6,
//                 alignItems: 'center',
//                 borderRadius: 5,
//                 marginTop: 10,
//               }}>
//               <Text style={{ fontSize: 16, color: 'white' }}>Close</Text>
//             </TouchableOpacity>

//           </View>
          
//           <FlatList
//             keyboardShouldPersistTaps="always"
//             data={comments}
//             renderItem={({ item }) => (
//               <View style={{padding: 8, borderBottomWidth: 1, borderBottomColor: '#eee',}}>
//                 <View style={{
//                 flexDirection: "row",
//                 padding: 8,
//               }}>
//                 <Image 
//                   source={{ uri: "https://media.licdn.com/dms/image/D4E03AQH8qKoObk8Emw/profile-displayphoto-shrink_200_200/0/1667745287740?e=1716422400&v=beta&t=tofEM572UkY4v7xi0PWPCo1rdoITbPFcDqPVO98n7PE" }}
//                   style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} // Rounded image with margin to the right
//                 />
//                 <View style={{ flex: 1,backgroundColor: "#F3F3F3", borderRadius: 5, padding: 10  }}>
//                   <Text style={{
//                     fontWeight: "bold", // Make the name bold
//                     color: "#333", // Darker color for text
//                     marginBottom: 2, // Small space between the name and the comment text
//                   }}>
//                     Anson Leon Tan
//                   </Text>
//                   <Text style={{
//                     color: "#555", // Slightly lighter color for comment text
//                   }}>
//                     {item.text}
//                   </Text>
//                 </View>
//               </View>

//                 <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 1, marginLeft: 60}}>
//                   <TouchableOpacity onPress={() => alert('Like functionality to be implemented')}>
//                     <Text style={{marginRight: 15, color: Colors.BLUE}}>Like</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => alert('Reply functionality to be implemented')}>
//                     <Text style={{marginRight: 15, color: Colors.BLUE}}>Reply</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//             keyExtractor={item => item.id.toString()}
//           />


// <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
//   <TextInput
//     style={{
//       flex: 1,
//       marginRight: 10,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       padding: 8,
//       borderRadius: 5,
//       backgroundColor: '#fff',
//       fontSize: 16,
//     }}
//     onChangeText={setNewCommentText}
//     value={newCommentText}
//     placeholder="Write a comment..."
//     multiline
//   />
//   <TouchableOpacity
//     onPress={submitComment}
//     style={{
//       backgroundColor: '#6998AB', // Example button color
//       paddingVertical: 8,
//       paddingHorizontal: 16,
//       borderRadius: 5,
//       justifyContent: 'center', // Center content for Android
//     }}
//   >
//     <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Post</Text>
//   </TouchableOpacity>
// </View>

//         </View>
//       </Modal>

//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 }}>
//         <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//           <Image source={item.profile_picture} style={{ borderRadius: 100, height: 60, width: 60, marginRight: 10 }} />
//           <View>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.BLACK }}>{item.name}</Text>
//               {
//                 item.connection ?
//                   <Text style={{ fontWeight: "bold" }}>
//                     <Icon name="dot-single" color={Colors.GRAY} size={16} />
//                     <Text style={{ color: Colors.GRAY }}>{item.connection}</Text>
//                   </Text> : null
//               }
//             </View>
//             <Text style={{ width: 150 }} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
//             <Text style={{ fontSize: 12 }}>{item.timeAgo}{item.timeDuration}</Text>
//           </View>
//         </View>
//         {
//           item.connection ? null : <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "center" }}>
//             <Icon name='plus' size={15} color={Colors.BLUE} />
//             <Text style={{ color: Colors.BLUE, fontSize: 15, fontWeight: "bold", marginLeft: 2 }}>Follow</Text>
//           </TouchableOpacity>
//         }
//       </View>
//       {
//         item.content ? <Text style={{
//           paddingHorizontal: 16, textAlign: "justify", color: Colors.BLACK, marginVertical: 10
//         }} numberOfLines={5} ellipsizeMode='tail'>
//           {item.content}
//         </Text> : <View style={{ marginTop: 10 }} />
//       }
//       {
//         item.hasImage ? <Image source={item.postImage} style={{ height: 300, width: deviceWidth }} /> : null
//       }

//       <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 5, paddingHorizontal: 16 }}>

//         {/* Likes  */}
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image source={Images.LIKE} style={{ width: 25, height: 25, borderRadius: 100 }} />
//           <Text style={{ color: Colors.GRAY }}>{likesCount} likes</Text>
//         </View>

//         {/* Comments  */}
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           {
//             item.comments > 0 ? <Text style={{ color: Colors.GRAY }}>{item.comments} comments</Text> : null
//           }
//           {
//             item.comments > 0 && item.shares > 0 ? <Icon name='dot-single' size={16} color={Colors.GRAY} /> : null
//           }
//           {
//             item.shares > 0 ? <Text style={{ color: Colors.GRAY }}>{item.shares} shares</Text> : null
//           }
//         </View>
//       </View>
//       <View style={{ borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, marginTop: 10 }}>
//         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30, paddingTop: 5 }}
//         >
//           {/* Like  */}
//           <TouchableOpacity style={{ alignItems: "center" }} onPress={toggleLike}>
//             <Icon name='thumbs-up' size={22} color={isLiked ? "#406882" : Colors.GRAY} />
//             <Text style={{ color: isLiked ? Colors.BLUE : Colors.GRAY }}>Like</Text>
//           </TouchableOpacity>

//           {/* Comment - Now opens a modal */}
//           <TouchableOpacity
//             style={{ alignItems: "center" }}
//             onPress={() => setCommentModalVisible(true)}
//           >
//             <CustomIcon name="chatbubble-ellipses-outline" size={22} color={Colors.GRAY} />
//             <Text style={{ color: Colors.GRAY }}>Comment</Text>
//           </TouchableOpacity>

//           {/* Share  */}
//           <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
//             <Icon name='share' size={22} color={Colors.GRAY} />
//             <Text style={{ color: Colors.GRAY }}>Share</Text>
//           </TouchableOpacity>

//           {/* Send  */}
//           <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
//             <CustomIcon name='send' size={22} color={Colors.GRAY} />
//             <Text style={{ color: Colors.GRAY }}>Send</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   )
// }

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import Colors from './../utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import { deviceWidth } from './Dimensions';
import Images from './../utils/Images';
import CustomIcon from './CustomIcon';
import { useUser} from '@clerk/clerk-expo'

export default function ShowPosts({ item }) {

  const {user,isLoading} = useUser()
  // Introduce a local state for managing like status
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likesCount, setLikesCount] = useState(item.likes);
  const [commentModalVisible, setCommentModalVisible] = useState(false); // New state for modal visibility
  const [comments, setComments] = useState([
    { id: 1, name: "Leon Then Leong Onn", text: "What other strategies do you find effective in navigating financial markets?", picture: "https://media.licdn.com/dms/image/D5603AQFD9sI-A2HBzQ/profile-displayphoto-shrink_100_100/0/1695737262748?e=1716422400&v=beta&t=bqtRgzLe1nwDqReGxINcFqmixRoAeivZbsSudwrRnhg"},

    { id: 2, name: "Anson Kiu", text: "Thanks for the sharing", picture: "https://media.licdn.com/dms/image/D4E03AQEg3BUI9qAA2g/profile-displayphoto-shrink_100_100/0/1667727152362?e=1716422400&v=beta&t=FrejOnJ4OeO44QqL6XLa51ys3JdXUOn4BIhlsfGv9hA" },

    { id: 3, name: "Lim Ting Juin", text: "To me, the financial market is like a thrilling rollercoaster ride. It's all about seizing opportunities, managing risks, and enjoying the twists and turns along the way. ", picture: "https://media.licdn.com/dms/image/D4E03AQH8qKoObk8Emw/profile-displayphoto-shrink_200_200/0/1667745287740?e=1716422400&v=beta&t=tofEM572UkY4v7xi0PWPCo1rdoITbPFcDqPVO98n7PE" },
    // Add more sample comments as needed
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  // Modify toggleLike to also increment/decrement likes count
  const toggleLike = () => {
    if (isLiked) {
      // If currently liked, decrement likes count
      setLikesCount(likesCount - 1);
    } else {
      // If currently not liked, increment likes count
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const submitComment = () => {
    const newComment = {
      id: comments.length + 1, // Simple ID assignment; use a better ID generation in a real app
      text: newCommentText,
      name: user.fullName,
      picture: user?.imageUrl,
      // Add more fields as needed, e.g., isLiked, likesCount for each comment
    };
    setComments([...comments, newComment]);
    setNewCommentText(''); // Clear input after submission
  };

  return (
    <View style={{ backgroundColor: Colors.WHITE, marginVertical: 5, paddingVertical: 10 }}>
      {/* Comment Modal */}
      <Modal
        animationType="slide"
        transparent={false} // Change to false for full-screen modal
        visible={commentModalVisible}
        onRequestClose={() => {
          setCommentModalVisible(!commentModalVisible);
        }}
      >
        <View style={{ flex: 1, marginTop: 22 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Comments</Text>
            <TouchableOpacity
              onPress={() => setCommentModalVisible(false)}
              style={{
                backgroundColor: '#6998AB',
                padding: 6,
                alignItems: 'center',
                borderRadius: 5,
                marginTop: 10,
              }}>
              <Text style={{ fontSize: 16, color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            keyboardShouldPersistTaps="always"
            data={comments}
            renderItem={({ item }) => (
              <View style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: '#eee', }}>
                <View style={{
                  flexDirection: "row",
                  padding: 8,
                }}>
                  <Image
                    source={{ uri: item.picture }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} // Rounded image with margin to the right
                  />
                  <View style={{ flex: 1, backgroundColor: "#F3F3F3", borderRadius: 5, padding: 10 }}>
                    <Text style={{
                      fontWeight: "bold", // Make the name bold
                      color: "#333", // Darker color for text
                      marginBottom: 2, // Small space between the name and the comment text
                    }}>
                      {item.name}
                    </Text>
                    <Text style={{
                      color: "#555", // Slightly lighter color for comment text
                    }}>
                      {item.text}
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 1, marginLeft: 60 }}>
                  <TouchableOpacity onPress={() => alert('Like functionality to be implemented')}>
                    <Text style={{ marginRight: 15, color: Colors.BLUE }}>Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Reply functionality to be implemented')}>
                    <Text style={{ marginRight: 15, color: Colors.BLUE }}>Reply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />

          <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
            <TextInput
              style={{
                flex: 1,
                marginRight: 10,
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 8,
                borderRadius: 5,
                backgroundColor: '#fff',
                fontSize: 16,
              }}
              onChangeText={setNewCommentText}
              value={newCommentText}
              placeholder="Write a comment..."
              multiline
            />
            <TouchableOpacity
              onPress={submitComment}
              style={{
                backgroundColor: '#6998AB', // Example button color
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 5,
                justifyContent: 'center', // Center content for Android
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Post</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Image source={item.profile_picture} style={{ borderRadius: 100, height: 60, width: 60, marginRight: 10 }} />
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.BLACK }}>{item.name}</Text>
              {
                item.connection ?
                  <Text style={{ fontWeight: "bold" }}>
                    <Icon name="dot-single" color={Colors.GRAY} size={16} />
                    <Text style={{ color: Colors.GRAY }}>{item.connection}</Text>
                  </Text> : null
              }
            </View>
            <Text style={{ width: 150 }} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
            <Text style={{ fontSize: 12 }}>{item.timeAgo}{item.timeDuration}</Text>
          </View>
        </View>
        {
          item.connection ? null : <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name='plus' size={15} color={Colors.BLUE} />
            <Text style={{ color: Colors.BLUE, fontSize: 15, fontWeight: "bold", marginLeft: 2 }}>Follow</Text>
          </TouchableOpacity>
        }
      </View>
      {
        item.content ? <Text style={{
          paddingHorizontal: 16, textAlign: "justify", color: Colors.BLACK, marginVertical: 10
        }} numberOfLines={5} ellipsizeMode='tail'>
          {item.content}
        </Text> : <View style={{ marginTop: 10 }} />
      }
      {
        item.hasImage ? <Image source={item.postImage} style={{ height: 300, width: deviceWidth }} /> : null
      }

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 5, paddingHorizontal: 16 }}>

        {/* Likes  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.LIKE} style={{ width: 25, height: 25, borderRadius: 100 }} />
          <Text style={{ color: Colors.GRAY }}>{likesCount} likes</Text>
        </View>

        {/* Comments  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {
            item.comments > 0 ? <Text style={{ color: Colors.GRAY }}>{item.comments} comments</Text> : null
          }
          {
            item.comments > 0 && item.shares > 0 ? <Icon name='dot-single' size={16} color={Colors.GRAY} /> : null
          }
          {
            item.shares > 0 ? <Text style={{ color: Colors.GRAY }}>{item.shares} shares</Text> : null
          }
        </View>
      </View>
      <View style={{ borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30, paddingTop: 5 }}
        >
          {/* Like  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={toggleLike}>
            <Icon name='thumbs-up' size={22} color={isLiked ? "#406882" : Colors.GRAY} />
            <Text style={{ color: isLiked ? Colors.BLUE : Colors.GRAY }}>Like</Text>
          </TouchableOpacity>

          {/* Comment - Now opens a modal */}
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => setCommentModalVisible(true)}
          >
            <CustomIcon name="chatbubble-ellipses-outline" size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Comment</Text>
          </TouchableOpacity>

          {/* Share  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <Icon name='share' size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Share</Text>
          </TouchableOpacity>

          {/* Send  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <CustomIcon name='send' size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

