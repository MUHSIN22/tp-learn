import React, { useEffect } from 'react';
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from 'draft-js';
import { StyleSheet, View, Text, Link } from '@react-pdf/renderer';
import redraft from 'redraft';

const styles = StyleSheet.create({
  headingOne: {
    marginBottom: 4,
    color: '#3a4b56',
    fontWeight: 700,
    lineHeight: 1.35,
    fontSize: 12,
  },
  text: {
    marginBottom: 8,
    color: '#6b7880',
    fontSize: 10,
    lineHeight: 1.45,
  },
  list: {
    marginBottom: 8,
    marginLeft: 6,
  },
  listItem: {
    marginBottom: 4,
  },
  listItemText: {
    color: '#6b7880',
    fontSize: 10,
    lineHeight: 1.45,
  },
});

const HeadingOne = ({ children }) => {
  return (
    <View>
      <Text style={styles.headingOne}>{children}</Text>
    </View>
  );
};

const UnorderedList = ({ children, depth }) => {
  return <View style={styles.list}>{children}</View>;
};

const UnorderedListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>
        • &nbsp;<Text>{children}</Text>
      </Text>
    </View>
  );
};

const OrderedList = ({ children, depth }) => {
  return <View style={styles.list}>{children}</View>;
};

const OrderedListItem = ({ children, index }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>
        {index + 1}. &nbsp;<Text>{children}</Text>
      </Text>
    </View>
  );
};

const renderers = {
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: (children, { key }) => {
      return (
        <Text key={`bold-${key}`} style={{ fontWeight: 700 }}>
          {children}
        </Text>
      );
    },
    ITALIC: (children, { key }) => {
      return (
        <Text key={`italic-${key}`} style={{ fontStyle: 'italic' }}>
          {children}
        </Text>
      );
    },
    UNDERLINE: (children, { key }) => {
      return (
        <Text key={`underline-${key}`} style={{ textDecoration: 'underline' }}>
          {children}
        </Text>
      );
    },
  },
  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    unstyled: (children, { keys }) => {
      return children.map((child, index) => {
        return (
          <View key={keys[index]}>
            <Text style={styles.text}>{child}</Text>
          </View>
        );
      });
    },
    'header-one': (children, { keys }) => {
      return children.map((child, index) => {
        return <HeadingOne key={keys[index]}>{child}</HeadingOne>;
      });
    },
    'unordered-list-item': (children, { depth, keys }) => {
      return (
        <UnorderedList key={keys[keys.length - 1]} depth={depth}>
          {children.map((child, index) => (
            <UnorderedListItem key={keys[index]}>{child}</UnorderedListItem>
          ))}
        </UnorderedList>
      );
    },
    'ordered-list-item': (children, { depth, keys }) => {
      return (
        <OrderedList key={keys.join('|')} depth={depth}>
          {children.map((child, index) => (
            <OrderedListItem key={keys[index]} index={index}>
              {child}
            </OrderedListItem>
          ))}
        </OrderedList>
      );
    },
  },
  /**
   * Entities receive children and the entity data
   */
  entities: {
    // key is the entity key value from raw
    LINK: (children, data, { key }) => (
      <Link key={key} src={data.url}>
        {children}
      </Link>
    ),
  },
};

const RichText = ({ note }) => {
  const blocksFromHTML = convertFromHTML(note);
  const initialState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
  );

  const editorState = EditorState.createWithContent(initialState);
  const rawContent = convertToRaw(editorState.getCurrentContent());

  return redraft(rawContent, renderers, { blockFallback: 'unstyled' });
};

export default RichText;