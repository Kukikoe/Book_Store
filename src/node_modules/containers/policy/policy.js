import React, {Component} from 'react';
import './policy.css';
//import './policy_media.css';

class PrivacyPolicyPopup extends Component {
    render() {
        return (
            <div>
                <div className="modal fade privacy-policy-popup" id="policy" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title">Security policy</h4>
                            </div>
                            <div className="modal-body">
                                <p>The administration of the online store "Dolly" guarantees its customers full
                                    security and confidentiality of personal data (email address, phone number, name,
                                    etc.).</p>
                                <p>All the information provided is stored in a secure database and is not transferred to
                                    unauthorized users. The data left in the forms is used exclusively for feedback to
                                    the customer and for delivery of the goods.</p>
                                <p>Registration on the website of the online store gives you the opportunity to receive
                                    notifications about new items and the status of your order by e-mail. For registered
                                    users discounts and special offers are available, information about which can be
                                    checked with the manager by phone.</p>
                                <p>If you have any questions, you can write to <span
                                    className="privacy-email">support@dolly.co.ua</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PrivacyPolicyPopup;