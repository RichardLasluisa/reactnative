export function EpisodeDetails({episode }) {

    return (
        <View style={StyleSheet.container}>
            <View>
                <Text style={StyleSheet.episodeCode}>{episode.episode}</Text>
                <Text style={StyleSheet.episodeId}>{episode.id}</Text>
            </View> 
        </View>
    );
};