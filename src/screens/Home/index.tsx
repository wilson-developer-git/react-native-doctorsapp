import { Doctor } from "../../components/Doctor";
import { Container, List } from "./style";

const DATA = [
  { id: '1', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' },
  { id: '2', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' },
  { id: '3', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' },
  { id: '4', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '5', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '6', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '7', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '8', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '9', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '10', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '11', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
  { id: '12', avatar: 'https://github.com/wilson-developer-git.png', name: 'Hailton', specialist: 'Neuro' }, 
];

export function Home() {
  return (
    <Container>
      <List 
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => <Doctor type="primary" data={item} /> }
        numColumns={2}
      />
    </Container>    
  );
}