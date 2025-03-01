import React from "react";
import Board from "./Board";

const Construct = () => {
  const boardData = [
    { imageSrc: "src/assets/arrays.png", imageAlt: "Arrays", name: "Arrays", link: "https://www.geeksforgeeks.org/what-is-array/" },
    { imageSrc: "src/assets/BitMan.png", imageAlt: "Bit Manipulation", name: "Bit Manipulation", link: "https://www.geeksforgeeks.org/bits-manipulation-important-tactics/" },
    { imageSrc: "src/assets/bTree.png", imageAlt: "Image 3", name: "Binary Tree", link: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
    { imageSrc: "src/assets/dp.png", imageAlt: "Image 4", name: "Dynamic Programming", link: "http://geeksforgeeks.org/dynamic-programming/" },
    { imageSrc: "src/assets/linkedList.png", imageAlt: "Image 5", name: "LinkedList", link: "https://www.geeksforgeeks.org/linked-list-data-structure/" },
    { imageSrc: "src/assets/map.png", imageAlt: "Image 6", name: "HashMap", link: "https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/" },
    { imageSrc: "src/assets/queue.png", imageAlt: "Image 7", name: "Queues", link: "https://www.geeksforgeeks.org/queue-data-structure/" },
    { imageSrc: "src/assets/redBlack.png", imageAlt: "Image 8", name: "Red Black Trees", link: "https://www.geeksforgeeks.org/introduction-to-red-black-tree/" },
    { imageSrc: "src/assets/segmentTree.png", imageAlt: "Image 9", name: "Segment Trees", link: "https://www.geeksforgeeks.org/segment-tree-data-structure/" },
    { imageSrc: "src/assets/stack.png", imageAlt: "Image 10", name: "Stacks", link: "https://www.geeksforgeeks.org/stack-data-structure/" },
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        {boardData.map((board, index) => {
          if (index % 5 === 0) {
            return (
              <tr key={index} style={{ marginBottom: "20px" }}>
                {boardData.slice(index, index + 5).map((boardItem, i) => (
                  <Board
                    key={i}
                    imageSrc={boardItem.imageSrc}
                    imageAlt={boardItem.imageAlt}
                    name={boardItem.name}
                    link={boardItem.link}
                  />
                ))}
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default Construct;
