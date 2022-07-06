import { useState } from "react";

const [userOption, setUserOption] = useState(null);

export default function RadioButton({ data, onSelect }) {

return (
  <View>
    {data.map((item) => {
      return (
        /*Change the 'onPress' handler here */
        <Pressable onPress={() => setUserOption(item.value)}>
          <Text> {item.value}</Text>
        </Pressable>
      );
    })}
    <Text> User option: {userOption}</Text>
  </View>
);

  }