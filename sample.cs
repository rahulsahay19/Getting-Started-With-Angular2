using System.Runtime.Serialization;

namespace MovieLib.Contracts
{
    [DataContract(Namespace = "http://www.rahulsahay.com/pragmaticwcf")]
    public class MovieData :IExtensibleDataObject
    {
        [DataMember]
        public string MovieName { get; set; }
        [DataMember]
        public string DirectorName { get; set; }
        [DataMember]
        public string ReleaseYear { get; set; }

        public ExtensionDataObject ExtensionData
        {
            get; set;
        }
    }
}