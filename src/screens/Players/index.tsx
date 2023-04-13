import { FlatList } from 'react-native'

import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { useState } from 'react';

export function Players() {

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Jorge', 'João', 'Maria', 'José', 'Ana',])

  return (
    <Container>
      <Header showBackButton/>

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

        <Form>
            <Input 
                placeholder="Nome da pessoa"
                autoCorrect={false}

            />

            <ButtonIcon icon="add" />
        </Form>

        <HeaderList>
            <FlatList
                data={['Time A', 'Time B', 'Time C']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter
                        title={item}
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                    />
                )}
                horizontal
            />
            <NumberOfPlayers>{players.length}</NumberOfPlayers>
        </HeaderList>

        <FlatList 
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <PlayerCard 
                    name={item}
                    onRemove={() => {}}
                />
            )}
            ListEmptyComponent={() => (
                <ListEmpty 
                    message="Não há pessoas neste time."
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex: 1}]}
        />

        <Button 
            title="Remover turma"
            type='SECONDARY'
        />
        
        
    </Container>
  );
}