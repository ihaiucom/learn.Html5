// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:29:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Test
{
    /// <summary>
    ///  回显
    /// </summary>
    [MessageHandler(URL = "Test/Echo")]
    public class EchoHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<EchoResponse>>>();
            var arg = new CommonEventArgs<EchoResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<EchoResponse>.EventId, arg);
        }   
    }
}