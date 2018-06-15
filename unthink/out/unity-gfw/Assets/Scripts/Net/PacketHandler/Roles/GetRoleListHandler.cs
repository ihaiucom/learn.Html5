// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-6-14 11:32:27,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------


namespace StarForce.Roles
{
    /// <summary>
    /// 选择角色
    /// </summary>
    [MessageHandler(URL = "Roles/GetRoleList")]
    public class GetRoleListHandler : ResponsetHandlerBase
    {
        public override void Handle(object sender, ResponseEventArgs response)
        {
            var msg = response.GetData<ResponseMessage<OOBResponse<GetRoleListResponse>>>();
            var arg = new CommonEventArgs<GetRoleListResponse>(msg.errno,msg.errmsg,msg.data.data);
            msg.data.HandleOOB();
            SZUnityFramework.GameEntry.Event.Fire(CommonEventArgs<GetRoleListResponse>.EventId, arg);
        }   
    }
}