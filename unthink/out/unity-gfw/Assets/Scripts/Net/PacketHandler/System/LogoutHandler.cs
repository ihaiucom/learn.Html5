// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:29:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.System
{
    [MessageHandler(URL = "System/Logout")]
    public class LogoutHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<LogoutResponse>>>();
            var arg = new CommonEventArgs<LogoutResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<LogoutResponse>.EventId, arg);
        }   
    }
}