import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './nearbyjobcard.style';
import { checkImageUrl } from '../../../../utils/index';
import { icons } from '../../../../constants';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={ checkImageUrl(job.employer_logo)
            ? {uri: job.employer_logo}
            : icons.placeholder
          }
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;